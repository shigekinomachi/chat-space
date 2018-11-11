# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## massageテーブル
｜column|Type|options|
|-------|----|-------|
|user_id|integer|
|test|text|
|image|text|
|group_id|integer|

### Association
- belongs_to :group
- belongs_tp :user

## userテーブル
｜column|Type|options|
|-------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Associtation
- has many :groups, through: group_users
- has many :group_users

## groupテーブル
｜column|Type|options|
|-------|----|-------|
|group_name|text|null: false, foreign_key: true|
|name|string|string|null: false, foreign_key: true|

### Association
- has many :users, throught: :group_users
- has many :group_users
- accepts_nested_attributes_for :group_users

## group_userテーブル
｜column|Type|options|
|-------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Associtation
- belongs_to :group
- belongs_tp :user

* ...
