export default class Post{
    public postType:string;
    public postValue:any;
    public comment:any;

    public likeCount:number;
    public subscribeCount:number;
    public commentCount:number;
    public commentList:any[];

    public constructor() {
        //default assumption
        this.postType='TEXT';
        this.postValue='';
        
        this.likeCount=0;
        this.commentCount=0;
        this.subscribeCount=0;

        this.commentList=[];

    }
}