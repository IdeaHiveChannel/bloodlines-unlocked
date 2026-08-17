import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

SCREENSHOTS = Path("/tmp/browser/anatomy_audit/screenshots")
SCREENSHOTS.mkdir(parents=True, exist_ok=True)

async def audit_viewport(page, width, height, name):
    await page.set_viewport_size({"width": width, "height": height})
    # Navigate to Malayalam patient landing
    await page.goto(f"http://localhost:8080/ml/patient-landing", wait_until="networkidle")
    await asyncio.sleep(1)
    await page.screenshot(path=str(SCREENSHOTS / f"{name}_landing.png"))
    
    # Check anatomy section
    anatomy = page.locator("section").filter(has_text="Anatomy")
    if await anatomy.count() > 0:
        await anatomy.scroll_into_view_if_needed()
        await page.screenshot(path=str(SCREENSHOTS / f"{name}_anatomy.png"))
        
        # Hover over brain to see if label clips
        brain_hotspot = page.locator('g[role="button"][aria-label="മസ്തിഷ്കവും രക്തക്കുഴലുകളും"]')
        if await brain_hotspot.count() > 0:
            await brain_hotspot.hover()
            await asyncio.sleep(0.5)
            await page.screenshot(path=str(SCREENSHOTS / f"{name}_anatomy_hover.png"))

async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        # Audit Mobile (iPhone SE-ish)
        await audit_viewport(page, 375, 667, "mobile")
        
        # Audit Tablet
        await audit_viewport(page, 768, 1024, "tablet")
        
        # Audit Desktop
        await audit_viewport(page, 1280, 800, "desktop")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
