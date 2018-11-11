## messagesテーブル
｜column|Type|options|
|-------|----|-------|
|text|text|
|image|string|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
｜column|Type|options|
|-------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Associtation
- has many :group_users
- has many :groups, through: :group_users
- has many :messages

## groupsテーブル
｜column|Type|options|
|-------|----|-------|
|name|string|null: false|

### Association
- has many :group_users
- has many :users, throught: :group_users
- has many messages

## group_usersテーブル
｜column|Type|options|
|-------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Associtation
- belongs_to :group
- belongs_to :user

* ...
