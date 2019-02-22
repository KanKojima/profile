Rails.application.routes.draw do
  root to:'profiles#index'
  get 'portforio/1',to:'profiles#portforio_1'
  get 'portforio/2',to:'profiles#portforio_2'
  get 'portforio/3',to:'profiles#portforio_3'
  get 'portforio/4',to:'profiles#portforio_4'
  get 'portforio/5',to:'profiles#portforio_5'
  get 'portforio/6',to:'profiles#portforio_6'
  get 'design_is/1',to:'profiles#not_art'
  get 'design_is/2',to:'profiles#solution'
  get 'design_is/3',to:'profiles#everyday'
end
