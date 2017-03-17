
/**
 * This is a tag to insert Bootstrap tooltips!!
 *
 * Usage {% "[text that you want in the tooltip]" %}
 * Text must be surrounded by quotes.
 */
hexo.extend.tag.register('tooltip', function (args) {
	
  var tooltiptext = args[0];
  
  return '<span class="footnote" data-toggle="tooltip" title="' + tooltiptext + '"></span>';

});


 