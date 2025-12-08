# Deployment Guide - Vercel with GitHub Integration

## Step-by-Step Instructions

### 1. Deploy via Vercel GitHub Integration

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" to connect your GitHub account

2. **Import Your Repository**
   - After logging in, click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find and select `mysiriki-portfolio`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vercel should auto-detect "Vite"
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `dist` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)

4. **Add Environment Variables** (if you use EmailJS)
   - Click "Environment Variables"
   - Add these three variables:
     - `VITE_APP_EMAILJS_SERVICE_ID` = (your EmailJS service ID)
     - `VITE_APP_EMAILJS_TEMPLATE_ID` = (your EmailJS template ID)
     - `VITE_APP_EMAILJS_PUBLIC_KEY` = (your EmailJS public key)
   - Make sure to add them for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at: `https://mysiriki-portfolio.vercel.app` (or similar)

---

### 2. Connect Custom Domain (mysiriki.com)

1. **In Vercel Dashboard**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `mysiriki.com`
   - Click "Add"
   - Also add: `www.mysiriki.com`

2. **Vercel will show DNS configuration**
   - Note the DNS records Vercel provides
   - You'll need to add these in Hostinger

---

### 3. Configure DNS in Hostinger

1. **Log in to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Navigate to: **Domains** → **Your Domain** → **DNS / Name Servers**

2. **Add DNS Records**

   For the apex domain (`mysiriki.com`):
   - **Option A (Recommended)**: Use CNAME if supported
     - Type: `CNAME`
     - Name: `@` or leave blank
     - Value: `cname.vercel-dns.com`
     - TTL: `3600` or default
   
   - **Option B**: Use A Record
     - Type: `A`
     - Name: `@` or leave blank
     - Value: `76.76.21.21` (check Vercel dashboard for current IP)
     - TTL: `3600` or default

   For the www subdomain (`www.mysiriki.com`):
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `3600` or default

3. **Save Changes**
   - Click "Save" or "Add Record"
   - DNS propagation can take 5-60 minutes (sometimes up to 48 hours)

---

### 4. Verify Domain Connection

1. **In Vercel Dashboard**
   - Go to Settings → Domains
   - You'll see the domain status
   - Wait for "Valid Configuration" status
   - SSL certificate will be automatically provisioned

2. **Test Your Site**
   - Visit `https://mysiriki.com` (once DNS propagates)
   - Visit `https://www.mysiriki.com`
   - Both should work and show SSL (HTTPS)

---

### 5. Automatic Deployments

✅ **Every time you push to GitHub:**
- Vercel will automatically detect changes
- Build and deploy your site
- Your live site will update automatically

✅ **Preview Deployments:**
- Every pull request gets a preview URL
- Test changes before merging to main

---

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation
- Use https://dnschecker.org to check DNS propagation globally
- Verify DNS records match exactly what Vercel shows

### Build Fails?
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### EmailJS Not Working?
- Make sure environment variables are set in Vercel
- Check EmailJS dashboard for correct service/template IDs
- Verify the public key is correct

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Hostinger Support: https://www.hostinger.com/contact



