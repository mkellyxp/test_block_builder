function initTinyMCE(){
	tinymce.init({
		selector:'.tinymce',
		browser_spellcheck: true,
		height : 300,
		menubar: false,
		relative_urls : false,
		remove_script_host : false,
		cache_suffix: '?v=<?php echo VIP_VERSION ?>',
		verify_html: false,
		mobile: {
			toolbar: ['formatselect | bold italic forecolor', 'alignleft aligncenter alignright alignjustify bullist numlist','link image | media | code'],
  		},
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table paste code textcolor colorpicker'
		],
		contextmenu: "link image imagetools table spellchecker copy paste",
		paste_preprocess : function(pl, o) {
			//o.content =  o.content.replace(/\<(?!img|br|p|ul|li|strong).*?\>/g, "");
		},
		paste_postprocess : function(pl, o) {
			o.node.innerHTML = o.node.innerHTML.replace(/\<(?!img|br|p|\/p|li|\/li|strong|\/strong|ul|\/ul|b|\/b|i|\/i|a|\/a|em|\/em|code|\/code).*?\>/g, "");
		},
		image_class_list: [
			{title: 'None', value: ''},
			{title: 'Left', value: 'pull-left'},
			{title: 'Right', value: 'pull-right'},
			{title: 'Center', value: 'center-block'}
		],
		media_poster: false,
		media_dimensions: false,
		media_alt_source: false,
		audio_template_callback: function(data) {
			return handleTinyEmbed( data );
		},
		video_template_callback: function(data) {
			return handleTinyEmbed( data );
 		},
		toolbar: 'formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist | link image | media | code | undo redo | fullscreen',
		image_title: true,
		automatic_uploads: true,
		file_picker_types: 'image',
		images_upload_url: '/admin/lessons/add_image',
		content_style: "img{max-width:100%; height:auto;} iframe{max-width: 100%;} .pull-left{float:left;margin-right:10px;margin-bottom:10px;} .pull-right{float:right;margin-left:10px;margin-bottom:10px;} .center-block{display: block;margin-left: auto;margin-right: auto;}",
		setup: function(editor) {
			editor.on('blur', function(e) {
				//tinyMCE.triggerSave();
				editor.save();
				//saveMV();
				console.log('editor save');
			});
			editor.on('keyup', function(e) {
				//clearTimeout( mvAutoSave );
				//mvAutoSave = setTimeout(function(){ saveMV() }, 2000);
			});
		}

	});
}