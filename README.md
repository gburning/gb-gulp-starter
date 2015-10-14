# Simple Gulp Starter

Based on the gulpfile in [Lemonade](http://lemonade.im/). I wanted to create a simple starter for me to base my projects on. As I learn Gulp more this package will probably grow but for now it will mostly serve to compile sass and update browsersync.

## Instructions (for dummies like me)

1. Download files into your project folder. See [this](http://stackoverflow.com/questions/11497457/git-clone-without-git-directory?lq=1).
2. Run `npm install` to install gulp and all the other dependencies listed in `package.json`.
3. Modify gulp as you wish and run it. See below.
4. Happy camping!

## Modifications

###Use default server instead of proxy
If you want to use the "built-in" basic server instead of your own (like MAMP), replace
    proxy: "localhost/" + site_name
with
    server: {
    	baseDir: "./"
    }

## Contact
On the off chance that anyone else uses this and wants to get in touch with me, you can do so here:

-   [hello@gburning.com](mailto:hello@gburning.com)
-   [@gburning_](http://twitter.com/gburning_)