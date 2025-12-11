# Hub Navigation Application Customizer

A SharePoint Framework (SPFx) Application Customizer that renders hub site navigation for SharePoint Online. The navigation highlights the current site with bold text and accent color.

## Features

- **Hub Site Navigation**: Fetches and displays hub navigation nodes using SharePoint REST API
- **Current Site Highlighting**: Automatically highlights the current site with bold text and accent color
- **Dropdown Support**: Child navigation items appear in dropdown menus on hover
- **Responsive Design**: Adapts to different screen sizes
- **Theme Integration**: Uses SharePoint theme colors for consistent styling
- **Accessibility**: Includes ARIA attributes and keyboard navigation support

## Prerequisites

- Node.js v16.x or v18.x
- SharePoint Online tenant
- Site Collection App Catalog or Tenant App Catalog

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the solution:**
   ```bash
   gulp build
   ```

3. **Test locally:**
   - Update `config/serve.json` with your SharePoint site URL
   - Run the serve command:
   ```bash
   gulp serve
   ```
   - Accept the debug query parameters in the browser

4. **Package for deployment:**
   ```bash
   gulp bundle --ship
   gulp package-solution --ship
   ```

5. **Deploy:**
   - Upload the `.sppkg` file from `sharepoint/solution/` to your App Catalog
   - Deploy the app
   - Add the app to your site(s)

## Configuration

### serve.json

Update the `config/serve.json` file with your SharePoint tenant and site information:

```json
{
  "serveConfigurations": {
    "default": {
      "pageUrl": "https://yourtenant.sharepoint.com/sites/yourhubsite/SitePages/Home.aspx"
    }
  }
}
```

## How It Works

### REST API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `/_api/site?$select=HubSiteId,IsHubSite` | Determine if site is hub or associated |
| `/_api/hubsites/getbyid('{id}')?$select=SiteUrl` | Get hub site URL |
| `/_api/navigation/MenuState?MenuId='1002'` | Get hub navigation nodes |
| `/_api/web?$select=Url` | Get current site URL |

### Current Site Detection

The solution compares each navigation node's URL with the current site URL to determine which node should be highlighted. The comparison:
- Normalizes URLs (removes protocol, trailing slashes)
- Performs case-insensitive matching

### Styling

Current site highlighting includes:
- **Bold text** (font-weight: 700)
- **Accent color** border at the bottom
- **Darker background** in the navigation bar
- In dropdowns: colored text and left border accent

## Project Structure

```
src/
└── extensions/
    └── hubNavigation/
        ├── HubNavigationApplicationCustomizer.ts    # Main entry point
        ├── HubNavigationApplicationCustomizer.manifest.json
        ├── components/
        │   ├── HubNavigation.tsx                    # Main navigation component
        │   ├── HubNavigation.module.scss
        │   ├── NavItem.tsx                          # Individual nav item
        │   └── NavItem.module.scss
        ├── services/
        │   └── NavigationService.ts                 # REST API service
        ├── models/
        │   └── INavigationNode.ts                   # TypeScript interfaces
        └── loc/
            ├── en-us.js                             # Localization strings
            └── myStrings.d.ts
```

## Browser Support

- Microsoft Edge (Chromium)
- Google Chrome
- Mozilla Firefox
- Safari

## Troubleshooting

### Navigation not appearing
- Ensure the site is associated with a hub site or is a hub site itself
- Check browser console for errors
- Verify the hub site has navigation configured

### Styling issues
- Clear browser cache
- Ensure SharePoint theme is applied correctly

## License

MIT

