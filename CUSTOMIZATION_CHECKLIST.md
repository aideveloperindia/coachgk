# ✏️ Customization Checklist

## 📋 Content to Update

### 🔢 Contact Information (Priority: HIGH)

Replace `+91 96667 22233` with your actual phone number in:
- [ ] `components/Hero.tsx` (line 50)
- [ ] `components/Contact.tsx` (line 75)
- [ ] `components/Footer.tsx` (line 80)
- [ ] `components/FreeGuide.tsx` (line 145)

Replace `contact@gopikrishna.in` with your email in:
- [ ] `components/Contact.tsx` (line 82)
- [ ] `components/Footer.tsx` (line 85)

---

### 🖼️ Images (Priority: HIGH)

#### Profile Photos
- [ ] Replace `public/main photo.png` with your professional photo
- [ ] Recommended size: 800x1000px (4:5 aspect ratio)
- [ ] Format: PNG or JPG
- [ ] Keep filename same or update in `components/About.tsx` (line 68)

#### Certificates
- [ ] Add certificate images to `public/certificates/`
- [ ] Update certificate data in `components/Certificates.tsx` (line 13-54)
- [ ] Update image paths to point to your actual files
- [ ] Recommended format: JPG or PNG

#### Client Logos
- [ ] Add company logos to `public/logos/`
- [ ] Update if you want to display actual logos
- [ ] Currently using icon placeholders (works well too!)

---

### 📝 Text Content (Priority: MEDIUM)

#### About Section
File: `components/About.tsx`
- [ ] Line 66-82: Update your biography
- [ ] Keep the stats numbers or update them:
  - Years of experience
  - People trained
  - Programs conducted

#### Programs Section
File: `components/Programs.tsx`
- [ ] Line 18-58: Review the 6 programs listed
- [ ] Update titles if needed
- [ ] Update descriptions to match your services
- [ ] Icons can be changed (search lucide.dev)

#### Clients Section
File: `components/Clients.tsx`
- [ ] Line 8-21: Update client list
- [ ] Add your actual client organizations
- [ ] Update industry categories

#### Certificates Section
File: `components/Certificates.tsx`
- [ ] Line 13-54: Update certificate information
- [ ] Add your actual certifications
- [ ] Update years and organizations
- [ ] Update descriptions

#### Testimonials Section
File: `components/Testimonials.tsx`
- [ ] Line 7-52: Replace with real testimonials
- [ ] Update names, titles, companies
- [ ] Update testimonial text
- [ ] Update initials in avatar badges

---

### 🎥 Media (Priority: MEDIUM)

#### YouTube Videos
File: `components/Gallery.tsx`
- [ ] Line 9-48: Replace placeholder video IDs
- [ ] Get video IDs from your YouTube URLs
- [ ] Format: `youtube.com/watch?v=VIDEO_ID_HERE`
- [ ] Update video titles

Example:
```typescript
{
  id: 1,
  title: "Your Actual Video Title",
  videoId: "dQw4w9WgXcQ", // ← Replace this
  thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
}
```

---

### 🔗 Social Media Links (Priority: MEDIUM)

File: `components/Footer.tsx`
- [ ] Line 7-12: Update social media URLs
- [ ] LinkedIn: Your LinkedIn profile
- [ ] YouTube: Your YouTube channel
- [ ] Instagram: Your Instagram handle
- [ ] Facebook: Your Facebook page

Current placeholder: `https://linkedin.com`  
Update to: `https://linkedin.com/in/your-profile`

---

### 📄 Free Guide Content (Priority: LOW)

File: `components/FreeGuide.tsx`
- [ ] Line 35-95: Customize life lessons in PDF
- [ ] Update the 8 lessons and descriptions
- [ ] Modify PDF layout if needed
- [ ] Update footer contact info in PDF

---

### 🎨 Branding (Optional)

#### Colors
File: `tailwind.config.ts`
- [ ] Line 10-14: Update brand colors
  ```typescript
  colors: {
    primary: "#0A2540",  // Your primary brand color
    accent: "#D4AF37",   // Your accent color
    text: "#1E1E1E",     // Text color
  }
  ```

#### Fonts
File: `app/globals.css`
- [ ] Line 1: Change Google Fonts import
  ```css
  @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
  ```
- [ ] Update font family in `tailwind.config.ts` (line 16-19)

---

### ⚙️ Configuration (Priority: HIGH)

#### Environment Variables
File: `.env.local`
- [ ] Add MongoDB connection string (for lead capture)
- [ ] Add Google Analytics ID (optional)

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/coachgk
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Metadata
File: `app/layout.tsx`
- [ ] Line 5-9: Update SEO metadata
- [ ] Update title
- [ ] Update description
- [ ] Update keywords

---

## 🎯 Quick Win Changes (Do These First!)

### 1. Contact Numbers & Email (5 minutes)
Search and replace all instances of:
- `+91 96667 22233` → Your phone number
- `contact@gopikrishna.in` → Your email

### 2. Profile Photo (2 minutes)
- Drop your photo in `public/` folder
- Name it `main photo.png`
- Restart dev server

### 3. Social Links (3 minutes)
Update `components/Footer.tsx` with your social media URLs

### 4. MongoDB Setup (5 minutes)
1. Get free MongoDB Atlas account
2. Create cluster
3. Get connection string
4. Add to `.env.local`

---

## 🔍 Find & Replace Guide

Use your code editor's "Find in Files" feature:

| Find This | Replace With | Where |
|-----------|-------------|--------|
| `+91 96667 22233` | Your phone | Everywhere |
| `contact@gopikrishna.in` | Your email | Everywhere |
| `dQw4w9WgXcQ` | Your video IDs | Gallery.tsx |
| `https://linkedin.com` | Your LinkedIn | Footer.tsx |
| `Gopikrishna Sarvepalli` | Your name (if different) | All files |

---

## ✅ Testing After Customization

After making changes, test:
1. [ ] All links open correctly
2. [ ] WhatsApp buttons go to YOUR number
3. [ ] Images load properly
4. [ ] Videos play
5. [ ] PDF downloads with correct info
6. [ ] Forms work
7. [ ] Mobile view looks good
8. [ ] All animations work

---

## 🚨 Common Mistakes to Avoid

1. ❌ Forgetting to update phone numbers in all components
2. ❌ Using wrong image file names (case-sensitive!)
3. ❌ Not restarting dev server after adding images
4. ❌ Keeping placeholder social media links
5. ❌ Not testing WhatsApp links before going live
6. ❌ Uploading .env.local to GitHub (it's in .gitignore)
7. ❌ Using http:// instead of https:// for production
8. ❌ Not optimizing images (keep under 500KB each)

---

## 📞 Need Help?

If you get stuck customizing:
1. Check the component file directly
2. Look for comments in the code
3. Refer to SETUP_GUIDE.md
4. Contact support: contact@gopikrishna.in

---

## 🎉 You're Ready!

Once you've checked off the **Priority: HIGH** items, your website is ready to launch!

The other items can be updated over time as you gather:
- More testimonials
- More certificates
- More video content
- More client logos

---

**Remember:** Start simple, launch fast, improve continuously! 🚀

*Built by Beyondx Informatics Analytics Pvt. Ltd.*











