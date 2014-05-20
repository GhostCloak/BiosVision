# BiosVision

- Author     : [William Chambers](http://bioselement.com/)
- Theme Demo : http://biosvision.ghostcloak.com/
- Theme URI  : [GhostCloak](http://ghostcloak.com/)
- Version    : 1.7

Vision is a clean, modern blog theme designed to put the focus on both your content and identity. It features a large sidebar photo to showcase your identity and then gets out of the way.

The development of this theme is only possible thanks to community support. If this and similar projects are important to you, please support it's continued development: https://gum.co/biosvision

This is of course a theme for [Ghost](http://github.com/tryghost/ghost/).

## Changelog

Development can be tracked on [GitHub](https://github.com/GhostCloak/BiosVision).

- 1.7 - Style fixes
- 1.6 - Support for Ghost 0.4.1
- 1.5 - Began breaking theme into pieces for easier customization/editing
      - Converted to LESS, added Grunt support for compiling theme
- 1.4 - Change license from CC-BY-SA to MIT
- 1.3 - Replaced Mono Social Icons Font with Font Awesome
- 1.2 - Updated to Bootstrap 3.0.1
- 1.1 - Disqus Fix
- 1.0 - Initial Release

## Getting Started

First you need to download the theme. I currently recommend against getting it directly from GitHub as I'm still working on a better compiling process. Until then, you can get it pay-what-you-want from the [BiosVision](http://biosvision.ghostcloak.com/) Website.

## Key Configuration Options

- About & Contact Pages: Ghost does not yet offer official support for pages however you can add a post and set the post date in the past to 'hide' it. Then you can simply add the links to your sidebar in the `BiosVision/partials/sidebar.hbs` file.
- Author Profile: You will want to fill this in along with a photo as it is displayed in the footer of each post. 100x100 works well for the photo.
- Disqus Comments: You will need to input your `disqus_shortname` and `disqus_url` to enable disqus. If you wish to disable it, simply remove the `<section class="comments">` tags & everything between.
- Photo: The sidebar photo is set by changing your blog logo. The example image is 360x538 however you can use different sizes if needed.
- Social Links: You can edit these by modifying the `BiosVision/partials/sidebar.hbs` file. There are also other icons in the [Font Awesome](http://fontawesome.io/) Font you can use.

Important Note: You typically will have to restart Ghost to see theme changes take effect.

## Support

If you have issues/suggestions for the theme you can send an email to `contact@ghostcloak.com` or visit the Theme Website.

## Building Ghost

Before beginning, You will need to have Node, NPM and Grunt-CLI installed.

First, navigate to the theme directory and run the following commands via your terminal.

    npm install
    grunt recess

From here, you'll have the compiled CSS for your site.

## Copyright & License

Copyright (c) 2013-2014 William Chambers - Released under The MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Credits

- Background Image Credit: [Subtle Patterns](http://subtlepatterns.com/)
- Bootstrap: Copyright 2013 Twitter, Inc under the Apache 2.0 & MIT license's.
- Font Awesome: Licensed under the Open Font License.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/GhostCloak/biosvision/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
