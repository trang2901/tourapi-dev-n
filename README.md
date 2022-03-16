# TourApi
LinkApi: https://tour-api-dev.herokuapp.com/

 ##Tour
 
    get: '/tour' => show
    get: '/:page?limitPage' =>Pagination
    get: '/tour/:slug' => specific detail
    post: '/tour' => create
    put: '/tour/:id' => update
    delete: '/tour/:id' => delete

 ##Lich Trinh
 
    get: '/lichtrinh' => show
    get: '/lichtrinh/:id' => specific detail
    post: '/lichtrinh' => create
    put: '/lichtrinh/:id' => update
    delete: '/lichtrinh/:id' => delete
    
 ##Dia Diem
 
    get: 'diadiem' => show
    get: 'diadiem/:slug' => specific detail
    post: 'diadiem' => create
    put: 'diadiem/:id' => update
    delete: 'diadiem/:id' => delete
    
 ##Huong Dan Vien
 
    get: '/huongdanvien' => show
    get: '/huongdanvien/:id' => specific detail
    post: '/huongdanvien' => create
    put: '/huongdanvien/:id' => update
    delete: '/huongdanvien/:id' => delete
    
 ##Khach Hang
 
    get: '/khachhang' => show
    get: '/khachhang/:id' => specific detail
    post: '/khachhang' => create
    put: '/khachhang/:id' => update
    delete: '/khachhang/:id' => delete
    
 ##Admin   
 
    get: '/admin' => show
    get: '/admin/:id' => specific detail
    post: '/admin' => create
    put: '/admin/:id' => update
    delete: '/admin/:id' => delete
    
 ##Tai Khoan
 
    get: '/taikhoan' => show
    get: '/taikhoan/:username' => specific detail
    post: '/taikhoan' => create
    put: '/taikhoan/:id' => update
    delete: '/taikhoan/:id' => delete

 ##Thanh Toan   
 
    get: '/thanhtoan' => show
    get: '/thanhtoan/:id' => specific detail
    post: '/thanhtoan' => create
    put: '/thanhtoan/:id' => update
    delete: '/thanhtoan/:id' => delete

 ##Ky Thanh Toan   
 
    get: '/kythanhtoan' => show
    get: '/kythanhtoan/:id' => specific detail
    post: '/kythanhtoan' => create
    put: '/kythanhtoan/:id' => update
    delete: '/kythanhtoan/:id' => delete
