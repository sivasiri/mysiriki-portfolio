# How to Add Company Logos

## Step 1: Download the Logos

You need to download the official logos for:
1. **Accenture** - `accenture.png`
2. **Western Illinois University** - `wiu.png`

### Where to Get the Logos:

**Accenture Logo:**
- Visit: https://www.accenture.com/us-en/about/brand
- Or search: "Accenture logo PNG transparent"
- Download a high-quality PNG with transparent background
- Recommended size: 200x200px to 400x400px

**WIU Logo:**
- Visit: https://www.wiu.edu/brand/
- Or search: "Western Illinois University logo PNG transparent"
- Download a high-quality PNG with transparent background
- Recommended size: 200x200px to 400x400px

## Step 2: Add Logos to Project

1. Save the downloaded logos with these exact names:
   - `accenture.png`
   - `wiu.png`

2. Copy them to this folder:
   ```
   /src/assets/company/
   ```

3. The folder should now contain:
   - accenture.png (NEW)
   - wiu.png (NEW)
   - meta.png
   - shopify.png
   - starbucks.png
   - tekisky.png
   - tesla.png

## Step 3: Verify

The code is already updated to use these logos. Once you add the files:
- The build will work
- Your experience section will show the correct company logos
- Deploy to see the changes live

## Quick Command (if you have the logos ready):

```bash
# Copy logos to the company folder
cp /path/to/accenture.png src/assets/company/accenture.png
cp /path/to/wiu.png src/assets/company/wiu.png
```

## Note:
- Make sure the logos are PNG format with transparent backgrounds
- Optimal size: 200x200px to 400x400px
- The logos will be automatically resized in the UI

