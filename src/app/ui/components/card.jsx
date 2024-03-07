
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  export default function MovieCard() {
    return (
      <>
          <Card className="flex max-w-screen-md">
      <CardContent className="w-1/2 object-contain">

      <img src="https://placehold.jp/300x200.png" />
      </CardContent>
    <div>

    <CardHeader>
      <div className="header-content ml-6">
        <div>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
    <div className="ml-6">
      <p>Card Content</p>
    </div>
    </CardContent>
    <CardFooter>
    <div className="ml-6">
      <p>Card Footer</p>
    </div>
    </CardFooter>
    </div>
  </Card>
      </>
    );
  }