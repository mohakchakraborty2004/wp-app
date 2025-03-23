export interface Wallpapper {
uri : string 
name : string
}
export function useWallpapers() : Wallpapper[] {
    return [
        {
            uri : "https://i.pinimg.com/736x/dc/c0/28/dcc0288bcf63b4767d820973bfd31bb2.jpg", 
            "name" : "dark city"
        },{
            uri : "https://i.pinimg.com/474x/28/d5/9c/28d59c54ad3a04e8b303d64c6294a34c.jpg", 
            "name" : "japan"
        },{
             uri : "https://i.pinimg.com/474x/6b/37/9b/6b379bbc075111aa52bf6f06f1bfc0ed.jpg", 
            "name" : "vintage Car"
        },{
             uri : "https://i.pinimg.com/736x/ee/79/80/ee79809922ff482b5d5ee132a69aa6e0.jpg", 
            "name" : "Abstract"
        }
    ]
}