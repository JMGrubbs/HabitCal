# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Habit.destroy_all
Habit.create(name: 'organize', completion: false)
Habit.create(name: 'floss', completion: false)
Habit.create(name: 'stretch', completion: false)
Habit.create(name: 'do squats', completion: false)
Habit.create(name: 'drink water', completion: false)