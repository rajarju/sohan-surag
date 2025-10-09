# Sanity Webhook Setup Guide

This guide explains how to set up Sanity webhooks to automatically rebuild your Next.js site when content is updated.

## How It Works

1. You update content in Sanity Studio
2. Sanity triggers a webhook to your Next.js API route
3. Next.js revalidates the affected pages
4. Users see updated content immediately

## Setup Steps

### 1. Generate a Webhook Secret

Generate a secure random string for your webhook secret:

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or use any password generator
```

### 2. Add Secret to Environment Variables

**Local Development:**
Update `.env.local`:
```env
SANITY_REVALIDATE_SECRET="your-generated-secret-here"
```

**Production (Vercel):**
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add: `SANITY_REVALIDATE_SECRET` = `your-generated-secret-here`
4. Redeploy your site

### 3. Configure Webhook in Sanity

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Webhooks**
4. Click **Create webhook**
5. Configure:

   **Name:** Next.js Revalidation

   **URL:**
   - **Local:** `http://localhost:3001/api/revalidate?secret=your-generated-secret-here`
   - **Production:** `https://your-domain.com/api/revalidate?secret=your-generated-secret-here`

   **Dataset:** production

   **Trigger on:** Create, Update, Delete

   **Filter (optional):** Leave empty to trigger on all document types, or use GROQ to filter specific types:
   ```groq
   _type in ["hero", "about", "caseStudy", "testimonial", "whyMePoint", "leadershipPoint", "siteSettings"]
   ```

   **HTTP method:** POST

   **API version:** v2021-03-25 (or latest)

6. Click **Save**

### 4. Test the Webhook

1. Go to Sanity Studio
2. Edit any content (e.g., change hero title)
3. Publish the changes
4. Check webhook delivery in Sanity dashboard
5. Verify your Next.js site shows updated content

## What Gets Revalidated

The webhook intelligently revalidates pages based on content type:

| Content Type | Pages Revalidated |
|--------------|------------------|
| `hero`, `whyMePoint`, `leadershipPoint`, `testimonial` | Homepage (`/`) |
| `about` | Homepage (`/`) + About page (`/about`) |
| `siteSettings` | All pages |
| `caseStudy` | Homepage (`/`) + Specific case study page |

## Troubleshooting

### Webhook Not Triggering

1. Check webhook status in Sanity dashboard
2. Verify the secret matches in both Sanity webhook URL and environment variables
3. Check Vercel deployment logs for errors
4. Ensure the webhook URL is publicly accessible (not localhost for production)

### Local Development

For local testing with Sanity webhooks:
1. Use [ngrok](https://ngrok.com/) to expose localhost:
   ```bash
   ngrok http 3001
   ```
2. Use the ngrok URL in Sanity webhook: `https://your-ngrok-url.ngrok.io/api/revalidate?secret=...`

### Check Webhook Logs

View webhook delivery logs in Sanity:
1. Go to **API** → **Webhooks**
2. Click on your webhook
3. Check **Delivery log** tab

## Security Notes

- Keep your `SANITY_REVALIDATE_SECRET` private and secure
- Never commit secrets to git
- Use different secrets for development and production
- Rotate secrets periodically

## Alternative: Manual Revalidation

If webhooks aren't working, you can manually trigger revalidation:

```bash
curl -X POST "https://your-domain.com/api/revalidate?secret=your-secret"
```

## ISR (Incremental Static Regeneration)

As a fallback, you can also add revalidation time to your pages:

```typescript
// In your page.tsx
export const revalidate = 3600 // Revalidate every hour
```

This ensures content stays fresh even if webhooks fail.
