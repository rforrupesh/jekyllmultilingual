# frozen_string_literal: true

module Jekyll

  class MultilingualArchivePage < Page

    def initialize(site, base, dir, archive_type, archive_name, lang, posts)

      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "archive.html")

      self.data["title"] = archive_name
      self.data["lang"] = lang
      self.data["posts"] = posts
      self.data["archive_type"] = archive_type
      self.data["archive_name"] = archive_name

      self.data["permalink"] = "#{dir}/"

      self.data["description"] =
        "#{archive_type.capitalize} archive for #{archive_name}"

    end

  end



  class MultilingualArchiveGenerator < Generator

    safe true
    priority :low

    def generate(site)

      archives = {}

      site.posts.docs.each do |post|

        lang = post.data["lang"] || site.config["default_lang"] || "es"

        archives[lang] ||= {
          "categories" => {},
          "tags" => {}
        }

        Array(post.data["categories"]).each do |cat|

          archives[lang]["categories"][cat] ||= []
          archives[lang]["categories"][cat] << post

        end

        Array(post.data["tags"]).each do |tag|

          archives[lang]["tags"][tag] ||= []
          archives[lang]["tags"][tag] << post

        end

      end

          #
      # Generate Archives
      #
      archives.each do |lang, groups|

        prefix = lang == "es" ? "" : "/#{lang}"

        #
        # Categories
        #
        groups["categories"].each do |name, posts|

          slug = Jekyll::Utils.slugify(name)

          page = MultilingualArchivePage.new(
            site,
            site.source,
            "#{prefix}/category/#{slug}",
            "category",
            name,
            lang,
            posts
          )

          site.pages << page

        end

        #
        # Tags
        #
        groups["tags"].each do |name, posts|

          slug = Jekyll::Utils.slugify(name)

          page = MultilingualArchivePage.new(
            site,
            site.source,
            "#{prefix}/tag/#{slug}",
            "tag",
            name,
            lang,
            posts
          )

          site.pages << page

        end

      end
