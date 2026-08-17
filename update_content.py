import json

with open('src/lib/content.ts', 'r') as f:
    content = f.read()

# Update regionOrder and regionLabels in-place is complex due to structure, 
# but for this scale I can use a simpler approach of replacing the definitions.
# Actually, the user wants a full redesign of clinical content.
