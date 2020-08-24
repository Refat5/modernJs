const blogs = [
    {title: 'this is a block site'},
    {
        title: 'this is a blogs'
    }

];
//console.log(blogs);
//regural function 
Hi = {
    blogs : [
        {title: 'this is a block site'},
        {
            title: 'this is a blogs',
            year : 45
        }
    
    ],

logUser(){
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.year);
        
        
    });
}
};
Hi.logUser();
// console.log(typeof blogs);
