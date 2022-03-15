export default {
    data() {
        return {
            plugins: [
                'advlist autolink anchor code codesample',
                'lists link searchreplace fullscreen',
                'insertdatetime image media table paste help wordcount',
                "hr visualchars nonbreaking textpattern",
                'imagetools noneditable'
            ],
            toolbar: 'bold italic underline strikethrough | fontsizeselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist table | insertfile image media link instagram | forecolor backcolor removeformat | code fullscreen',
        };
    },

    methods: {
        tinymceInit() {
            return {
                plugins: this.plugins,
                toolbar: this.toolbar,
                image_advtab: true,
                image_caption: true,
                menubar: false,
                toolbar_drawer: 'floating',
                paste_data_images: true,
                content_style: "p { margin: 0; }",
                automatic_uploads: false,
            }
        },
    }
};