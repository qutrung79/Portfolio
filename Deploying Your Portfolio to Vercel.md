# Deploying Your Portfolio to Vercel

This guide will walk you through deploying your QA Automation portfolio website to Vercel with a custom domain.

## Step 1: Create a Vercel Account

1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign Up" and choose to sign up with GitHub, GitLab, Bitbucket, or email
3. Complete the registration process
4. Verify your email address if required

## Step 2: Install Vercel CLI (Optional)

If you prefer using the command line:

1. Install Node.js if you don't have it already
2. Open a terminal/command prompt
3. Run `npm install -g vercel`
4. Run `vercel login` and follow the instructions

## Step 3: Deploy Your Portfolio

### Option 1: Using Vercel Web Interface (Recommended)

1. Log in to your Vercel account
2. Click "Add New..." → "Project"
3. Choose "Import Git Repository" if you've uploaded to GitHub, or select "Upload" for direct upload
4. For direct upload:
   - Extract the `portfolio-deployment.zip` file
   - Drag and drop the extracted folder
5. Configure your project:
   - Project Name: Choose a name for your project
   - Framework Preset: Select "Other"
   - Root Directory: Leave as is (should detect automatically)
   - Build Command: Leave blank (pre-built)
   - Output Directory: Leave blank (default)
6. Click "Deploy"

### Option 2: Using Vercel CLI

1. Extract the `portfolio-deployment.zip` file
2. Open a terminal/command prompt
3. Navigate to the extracted folder
4. Run `vercel`
5. Follow the prompts to configure your deployment

## Step 4: Configure Custom Domain (Optional)

1. After deployment, go to your project dashboard
2. Click on "Settings" → "Domains"
3. Click "Add" and enter your domain name
4. Follow Vercel's instructions to verify domain ownership:
   - If you purchased a domain through Vercel, it will be configured automatically
   - Otherwise, you'll need to add DNS records at your domain provider

### Configuring DNS at Your Domain Provider

1. Log in to your domain provider
2. Find DNS settings or DNS management
3. Add the records as instructed by Vercel (typically a CNAME or A record)
4. Wait for DNS propagation (can take up to 48 hours)

## Step 5: Verify Your Deployment

1. Visit your Vercel deployment URL (e.g., `your-project.vercel.app`) or custom domain
2. Check that all pages and features work correctly
3. Test on different devices and browsers

## Benefits of Vercel

- Free tier with generous limits
- Automatic HTTPS
- Global CDN for fast loading
- Continuous deployment (if connected to Git)
- Analytics and performance monitoring

## Maintenance

Your site will remain online indefinitely on Vercel's free tier. To update your site in the future:

1. If using Git integration: Push changes to your repository
2. If using direct upload: Repeat the upload process with new files

## Troubleshooting

- If your site doesn't appear, check the deployment logs in your Vercel dashboard
- For custom domain issues, verify DNS settings and check for propagation
- For any other issues, refer to [Vercel documentation](https://vercel.com/docs)

For any questions or support, you can also use Vercel's help center or community forums.
