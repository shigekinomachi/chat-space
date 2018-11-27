class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :text
      t.string :image
      t.timestamps
    end
    add_reference :messages, :user, foreign_key: true, index: true
    add_reference :messages, :group, foreign_key: true, index: true
  end
end
