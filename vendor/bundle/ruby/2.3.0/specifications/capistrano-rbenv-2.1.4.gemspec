# -*- encoding: utf-8 -*-
# stub: capistrano-rbenv 2.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "capistrano-rbenv"
  s.version = "2.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Kir Shatrov", "Yamashita Yuu"]
  s.date = "2018-09-08"
  s.description = "rbenv integration for Capistrano"
  s.email = ["shatrov@me.com", "yamashita@geishatokyo.com"]
  s.homepage = "https://github.com/capistrano/rbenv"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "rbenv integration for Capistrano"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<capistrano>, ["~> 3.1"])
      s.add_runtime_dependency(%q<sshkit>, ["~> 1.3"])
      s.add_development_dependency(%q<danger>, [">= 0"])
    else
      s.add_dependency(%q<capistrano>, ["~> 3.1"])
      s.add_dependency(%q<sshkit>, ["~> 1.3"])
      s.add_dependency(%q<danger>, [">= 0"])
    end
  else
    s.add_dependency(%q<capistrano>, ["~> 3.1"])
    s.add_dependency(%q<sshkit>, ["~> 1.3"])
    s.add_dependency(%q<danger>, [">= 0"])
  end
end
