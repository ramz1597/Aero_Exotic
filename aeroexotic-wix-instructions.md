# AeroExotic — Wix & Base44 Launch Guide

---

## 🟦 WIX DEPLOYMENT

### Option A: Wix HTML iFrame (Recommended — Full Site)

**Best for:** Embedding the full custom site inside a Wix page

1. Open **Wix Editor**
2. Click **Add (+) → Embed → Custom Embeds → Embed a Widget**
3. Click **Enter Code**
4. Paste the entire content of `aeroexotic-wix-base44.html`
5. Set **Width** to `100%`
6. Set **Height** to `6000px` (or use auto-resize via the postMessage script included)
7. Click **Apply**

> 💡 **Pro tip:** For a true full-page experience, create a **blank Wix page** with no header/footer, add the HTML embed, stretch to full width and height.

---

### Option B: Wix Velo (Custom Code — Advanced)

1. Enable **Dev Mode** in Wix Editor (top bar)
2. Go to **Public Files** and upload images separately
3. Create a new **blank page**
4. In **Page Code**, import and render sections as Wix components

---

### Option C: Wix Editor X (Recommended for Designers)

1. Use **Editor X** for full responsive control
2. Add **HTML Component** → paste file content
3. Use Editor X's **Breakpoints** to fine-tune mobile/tablet

---

## 🟧 BASE44 DEPLOYMENT

Base44 is a React-based builder. Two options:

### Option A: Custom HTML Block
1. In your Base44 project, add a **Custom HTML** block
2. Paste the content of `aeroexotic-wix-base44.html`
3. The postMessage height reporter handles auto-sizing

### Option B: React Integration (Best)
Use the **Manus React version** (`aeroexotic-manus/`) for proper Base44 React component integration with full type safety and hot reload.

---

## ✅ Pre-Launch Checklist

- [ ] Replace `(509) 555-0190` with real phone number
- [ ] Replace `hello@aeroexotic.com` with real email  
- [ ] Connect contact form to email service (Wix has built-in forms too)
- [ ] Add your real social media URLs
- [ ] Test on mobile in Wix preview
- [ ] Publish when ready

---

## 📬 Connecting the Contact Form in Wix

Instead of using the embedded form, consider using **Wix Forms** (native):
1. Delete the `#quote` section from the embed
2. Add a native **Wix Form** below the iframe
3. Connect to **Wix Inbox** or your email

Or keep the embedded form and connect it to **Formspree**:
```
https://formspree.io/f/YOUR_FORM_ID
```

