## messagesテーブル
|column|Type|options|
|-------|----|-------|
|text|text|
|image|string|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|column|Type|options|
|-------|----|-------|
|email|string|null: false, unique: true, add_index|
|password|string|null: fals, eunique: true, add_index|
|name|string|null: false, unique: true, add_index|

### Associtation
- has many :group_users
- has many :groups, through: :group_users
- has many :messages

## groupsテーブル
|column|Type|options|
|-------|----|-------|
|name|string|null: false|

### Association
- has many :group_users
- has many :users, through: :group_users
- has many :messages

## group_usersテーブル
|column|Type|options|
|-------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Associtation
- belongs_to :group
- belongs_to :user

* ...
