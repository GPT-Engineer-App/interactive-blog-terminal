import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const posts = [
  {
    id: 1,
    title: "Welcome to My Terminal Blog",
    content: "This is the first post on my terminal-themed blog. Stay tuned for more updates!",
  },
  {
    id: 2,
    title: "Second Post",
    content: "Here's some more content for the blog. Enjoy reading!",
  },
];

const Index = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-green-500">
      <Card className="w-3/4 h-3/4 bg-black border border-green-500">
        <CardHeader>
          <CardTitle className="text-green-500">Terminal Blog</CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <div className="w-1/4 border-r border-green-500 p-2">
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="mb-2">
                  <Button
                    variant="link"
                    className="text-green-500"
                    onClick={() => handlePostClick(post)}
                  >
                    {post.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <ScrollArea className="w-3/4 p-2">
            {selectedPost ? (
              <div>
                <h2 className="text-xl mb-2">{selectedPost.title}</h2>
                <p>{selectedPost.content}</p>
              </div>
            ) : (
              <p>Select a post to read</p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;