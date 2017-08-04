(function() {

    function genId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    function getAvtUrl() {
        var listImages = [
            'images/avt1.jpg',
            'images/avt2.jpg',
            'images/avt3.jpg',
            'images/avt4.jpg',
            'images/pet.jpg',
            'images/pic.jpg',
            'images/pic1.jpg',
            'images/pic2.jpg',
            'images/pic3.jpg',
            'images/pic4.jpg',
            'images/pic5.jpg'
        ];

        var randIndex = Math.floor(Math.random() * 10);
        console.log(randIndex);
        return listImages[randIndex];
    }



    var vm = new Vue({
        el: '#quan-ly-thu-nuoi',
        data: {
            dsThu: [{
                id: '1',
                ten: "Doggy Lovely",
                giong: "Anh",
                tuoi: '5',
                loai: 'Berger Germany',
                gioiTinh: 0,
                thucAn: 'Thịt',
                selected: false,
                avtUrl: 'images/avt.jpg',
                isActive: false
            }, {
                id: '2',
                ten: "Lu Lu",
                giong: "Xiêm",
                tuoi: '6',
                loai: 'Corgi',
                gioiTinh: 1,
                thucAn: 'Thịt',
                selected: false,
                avtUrl: 'images/avt1.jpg',
                isActive: false
            }],
            itemData: {
                ten: '',
                tuoi: '',
                loai: '',
                gioiTinh: '',
                giong: '',
                thucAn: '',
                selected: false,
                avtUrl: ''
            },
            isEditMode: false,
            isSelectAll: false
        },
        methods: {
            selectItem: function(item) {
                vm.isEditMode = true;
                vm.itemData = $.extend({}, item);
                for (var i = vm.dsThu.length - 1; i >= 0; i--) {
                    if (item.id === vm.dsThu[i].id) {
                        vm.dsThu[i].isActive = true;
                    }
                    else {
                        vm.dsThu[i].isActive = false;
                    }
                }
            },
            createNew: function() {
                vm.isEditMode = false;
                vm.isSelectAll = false;
                vm.itemData = {
                    id: genId(),
                    ten: '',
                    tuoi: '',
                    loai: '',
                    gioiTinh: '',
                    giong: '',
                    thucAn: '',
                    avtUrl: getAvtUrl(),
                    isActive: false
                };
                for (var i = vm.dsThu.length - 1; i >= 0; i--) {
                    vm.dsThu[i].isActive = false;
                    vm.dsThu[i].selected = false;
                }
            },
            saveItem: function(item) {
                if (!item.ten || !item.giong) {
                    alert("Vui lòng nhập tên và chọn giống.");
                    return;
                }

                if (vm.isEditMode) {
                    for (var i = vm.dsThu.length - 1; i >= 0; i--) {
                        if (item.id === vm.dsThu[i].id) {
                            for (var key in vm.dsThu[i]) {
                                vm.dsThu[i][key] = item[key];
                            }
                            vm.dsThu[i].isActive = true;
                        }
                    }
                } else {
                    vm.itemData.id = genId();
                    vm.itemData.avtUrl = getAvtUrl();
                    vm.dsThu.push(vm.itemData);
                    vm.itemData = {
                        id: '',
                        ten: '',
                        tuoi: '',
                        loai: '',
                        gioiTinh: '',
                        giong: '',
                        thucAn: '',
                        avtUrl: ''
                    };
                }
            },
            toggleSelectAll: function() {
                vm.isSelectAll = !vm.isSelectAll;
                for (var i = 0; i < vm.dsThu.length; i++) {
                    vm.dsThu[i].selected = vm.isSelectAll;
                }
            },
            deleteItem: function() {
                var yes = confirm('Bạn chắc muốn xóa?');
                if (yes) {
                    for (var i = vm.dsThu.length - 1; i >= 0; i--) {
                        if (vm.dsThu[i].selected) {
                            vm.dsThu.splice(i, 1);
                        }
                    }
                }
            }
        }
    });

})();