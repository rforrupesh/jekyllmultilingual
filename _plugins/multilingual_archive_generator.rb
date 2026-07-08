module Jekyll
  class MultilingualArchiveGenerator < Generator
    safe true
    priority :low

    LANGS = %w[es en fr].freeze

    def generate(site)
      LANGS.each do |lang|
        lang_posts = site.posts.docs.select { |p| p.data['lang'] == lang }
        next if lang_posts.empty?

        # URL prefix per language
        prefix = lang == 'es' ? '' : "/#{lang}"

        generate_categories(site, lang, lang_posts, prefix)
        generate_tags(site, lang, lang_posts, prefix)
      end
    end

    private

    def generate_categories(site, lang, posts, prefix)
      # Collect all categories
      cat_map = Hash.new { |h, k| h[k] = [] }
      posts.each do |post|
        Array(post.data['categories']).each do |cat|
          cat_map[cat] << post
        end
      end

      cat_map.each do |category, cat_posts|
        slug = slugify(category)
        url  = "#{prefix}/category/#{slug}/"

        page = ArchivePage.new(site, url, {
          'layout'     => 'archive',
          'title'      => category,
          'type'       => 'category',
          'lang'       => lang,
          'posts'      => cat_posts.sort_by { |p| p.date }.reverse,
          'permalink'  => url,
          'description'=> "Posts about #{category}"
        })

        site.pages << page
      end
    end

    def generate_tags(site, lang, posts, prefix)
      tag_map = Hash.new { |h, k| h[k] = [] }
      posts.each do |post|
        Array(post.data['tags']).each do |tag|
          tag_map[tag] << post
        end
      end

      tag_map.each do |tag, tag_posts|
        slug = slugify(tag)
        url  = "#{prefix}/tag/#{slug}/"

        page = ArchivePage.new(site, url, {
          'layout'     => 'archive',
          'title'      => tag,
          'type'       => 'tag',
          'lang'       => lang,
          'posts'      => tag_posts.sort_by { |p| p.date }.reverse,
          'permalink'  => url,
          'description'=> "Posts tagged #{tag}"
        })

        site.pages << page
      end
    end

    def slugify(str)
      str.downcase.strip.gsub(/[^a-z0-9\-]/, '-').gsub(/-+/, '-').gsub(/^-|-$/, '')
    end
  end

  class ArchivePage < Page
    def initialize(site, url, data)
      @site = site
      @base = site.source
      @dir  = url
      @name = 'index.html'

      process(@name)

      @data = Jekyll::Utils.deep_merge_hashes(
        site.frontmatter_defaults.all(url, :pages),
        data
      )
    end

    def url
      @data['permalink']
    end
  end
end
