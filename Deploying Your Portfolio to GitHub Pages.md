# Deploying Your Portfolio to GitHub Pages

This guide will walk you through deploying your QA Automation portfolio website to GitHub Pages with a custom domain.

## Step 1: Create a GitHub Account (Skip if you already have one)

1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and follow the registration process
3. Verify your email address

## Step 2: Create a New Repository

1. Click the "+" icon in the top-right corner of GitHub and select "New repository"
2. Name your repository `yourusername.github.io` (replace "yourusername" with your actual GitHub username)
3. Make the repository public
4. Click "Create repository"

## Step 3: Upload Your Portfolio Files

### Option 1: Using GitHub Web Interface

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from the `portfolio-deployment.zip` after extracting it
3. Make sure to include all files and folders (index.html, assets folder, etc.)
4. Click "Commit changes"

### Option 2: Using Git Command Line (For Advanced Users)

1. Extract the `portfolio-deployment.zip` file
2. Open a terminal/command prompt
3. Navigate to the extracted folder
4. Run the following commands:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for your site to be published

## Step 5: Set Up a Custom Domain (Optional)

### Purchase a Domain (if you don't already have one)

1. Choose a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. Search for your desired domain name
3. Complete the purchase process

### Configure Your Domain with GitHub Pages

1. In your repository settings, under "GitHub Pages" section
2. Enter your custom domain in the "Custom domain" field
3. Click "Save"
4. Check "Enforce HTTPS" for secure connections

### Configure DNS Settings at Your Domain Provider

1. Log in to your domain provider
2. Find DNS settings or DNS management
3. Add the following records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: yourusername.github.io

## Step 6: Verify Your Deployment

1. Visit `https://yourusername.github.io` or your custom domain
2. Check that all pages and features work correctly
3. Test on different devices and browsers

## Troubleshooting

- If your site doesn't appear, wait 10-15 minutes as GitHub Pages may take time to deploy
- If images or styles are missing, check that all file paths are correct
- For custom domain issues, DNS changes can take up to 48 hours to propagate

## Maintenance

Your site will remain online indefinitely as long as your GitHub account remains active. To update your site in the future:

1. Make changes to your local files
2. Upload the new files to GitHub using the same process as above
3. GitHub Pages will automatically update your site

For any issues or questions, refer to [GitHub Pages documentation](https://docs.github.com/en/pages).
