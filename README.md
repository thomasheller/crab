# Crab

Crab is a clean website theme for the [Hugo](https://gohugo.io) static
site generator.

![Crab theme screenshot](https://raw.githubusercontent.com/thomasheller/crab/master/images/screenshot.png)

## Features

- responsive
- nested menus
- two-column
- tag support
- blog articles

## Preview

If you'd like to get a live demo of the Crab theme locally, you could
clone the repository, cd to the `exampleSite` directory and run
`HUGO_THEMESDIR=../.. hugo serve -t crab` from there (assuming
[Hugo](http://gohugo.io) is already installed).

## Installation

Read the [Hugo Quickstart
Guide](https://gohugo.io/overview/quickstart/) for an introduction to
Hugo itself. Once you created a new Hugo site, you can use the Crab
theme.

In your Hugo site's folder:

```sh
$ git clone https://github.com/thomasheller/crab themes/crab
```

Alternatively, if your site is in a git repository, you can use git
submodules:

```sh
$ git submodule add https://github.com/thomasheller/crab themes/crab
```

To update the theme to the latest version, simply pull in the changes:

```sh
$ git -C themes/crab pull
```

## Usage

The file `exampleSite/config.toml` provides an example for how the
Crab theme can be configured, especially in regard to the menu items.

Once you put a `config.toml` in your site's root directory, you can
get a preview of your Hugo site as usual:

```sh
$ hugo serve -t crab
```

## Menus

See the `exampleSite/config.toml` file for how the menus can be
configured:

- Use the `weight` attribute to specify the order of menu items.
  Menu items with smaller numbers appear before those with bigger
  numbers.
- For every menu, specify an `identifier` if you intend the menu to
  have sub-items. In each sub-item, make sure the `parent` attribute
  matches the value of the `identifier` used for the parent menu.
- Choose a unique `name` for each item in the same menu.

## Two-column layout

Look at the `exampleSite/content/home.md` file for a sidebar example.
If you put a shortcode like this at the beginning of your content
file, the summary will appear in the right column:

```md
{{% summary %}}
This appears in the sidebar. *Markdown* is supported!
{{% /summary %}}
```

## Tags

Tags are supported as [taxonomies described in the Hugo
manual](https://gohugo.io/taxonomies/usage/). Make sure your config
file contains a proper `taxonomies` declaration, like in the
`exampleSite/config.toml`. You can then put tags in the front matter
as usual:

```
+++
title = "A Page With Tags"
tags = [ "Hugo", "theme", "Crab" ]
...
```

Tags will appear both on regular (fixed, static) pages as well as for
blog posts, although they are probably more commonly used with blog
posts.

## Blog

Blog posts are intended to be created in the special directory
`/blog/`. The main difference about blog articles is that the layout
includes the timestamp when they were published (fixed pages don't
show a timestamp by default) and that they appear in the list of blog
articles.

The `exampleSites/config.toml` shows the kind of `permalinks`
declaration required to generate blog posts in the correct place.

## Logo

To change the logo of the crab to your own customised image,
add `logoimage` to `config.toml`, where `logoimage` is the
path inside your site's `static` directory.

## Contact

If you think anything could be improved about the Crab theme, feel
free to [send a PR](https://github.com/thomasheller/crab) to the Crab
repository.
