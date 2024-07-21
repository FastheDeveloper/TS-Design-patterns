class BlogPost {
  title: string;
  content: string;
  isAnonymous?: boolean;

  constructor(title: string, content: string, isAnonymous?: boolean) {
    this.title = title;
    this.content = content;
    this.isAnonymous = isAnonymous;
  }

  createPost() {
    console.log("Blog post Created");
  }

  updatePost() {
    console.log("Post is updated");
  }

  deletePost() {
    console.log("Post Is deleted");
  }
}

class BlogDisplayer {
  constructor(public blogPost: BlogPost) {}

  display() {
    console.log(
      `${this.blogPost.title} is a blog wit thoe commet: ${this.blogPost.content} `,
    );
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}`;
  }
}

const myBlog = new BlogPost("The fas Blog", "fas was a blogger");
const myDisplayer = new BlogDisplayer(myBlog);
myDisplayer.display();
