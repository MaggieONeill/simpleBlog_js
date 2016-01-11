//data handling classes on frontend

_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};

var Post = Backbone.Model.extend({});
var Posts = Backbone.Collection.extend({
  model: Post,
  url: "/posts"
});
