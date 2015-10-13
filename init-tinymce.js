tinymceOptions = {
  // Borrowed from http://fiddle.tinymce.com/
  selector: "textarea",
  plugins: [
  // "advlist autolink lists link image charmap print preview anchor",
  // "searchreplace visualblocks code fullscreen",
  // "insertdatetime media table contextmenu paste"
  ],
  toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",

  // Allow image drag and drop
  // Dropped images are embedded with data uris
  //http://www.tinymce.com/wiki.php/Configuration:paste_data_images
  paste_data_images: true
}

tinymce.init(tinymceOptions);
