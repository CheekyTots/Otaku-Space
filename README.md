# Web Development Final Project - OtakuSpace

Submitted by: **Eli Antoine**

This web app: **OtakuSpace** is a forum dedicated to anime, where users can create posts, interact with them, and discuss their favorite anime. The app includes a browsing feature for anime using a public API, allowing users to explore different anime and create discussions around them.

Time spent: **6** hours spent in total
https://forum-lilac.vercel.app/
## Required Features

The following **required** functionality is completed:

- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add:
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    - creation time
    - upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page.
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times
- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

The following **optional** features are implemented:

- [] Web app implements pseudo-authentication
  - Users can only edit and delete posts or delete comments by entering a secret key, which is set by the user during post creation
  - **or** upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them
  - For both options, only the original user author of a post can update or delete it
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post:
  - Users can repost a previous post by referencing its post ID
  - On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface
  - e.g., selecting the color scheme or showing the content and image of each post on the home feed
- [ ] Users can add more characteristics to their posts
  - Users can share and view web videos
  - Users can set flags such as "Question" or "Opinion" while creating a post
  - Users can filter posts by flags on the home feed
  - Users can upload images directly from their local machine as an image file
- [ ] Web app displays a loading animation whenever data is being fetched

The following **additional** features are implemented:

- [ ] Browse Anime: Users can explore a list of anime using a public API and view detailed information about each anime.
- [ ] Responsive Design: The app has a modern, clean, and responsive UI optimized for both desktop and mobile devices.

## Video Walkthrough

Here's a walkthrough of implemented user stories:


![supa-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/754deb12-d7df-42b5-99a1-557dbfb3b42b)



![finalprojectp4_MvBQ3Uef-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/28eec462-2548-413b-b482-801adc26de68)



![finalprojectp3_GepJCTJk-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/7878739d-9b8f-491a-b30f-ffcb293fefd6)



![finalprojectp1-online-video-cuttercom-1_YZX5y7Os-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e3cee31b-e003-4c69-add6-38a189f782dd)


![finalprojectp1-online-video-cuttercom_buIFFh82-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/bdf4c7b3-49b9-4686-a5d5-45524f09debb)





![mew_b4e51lSH-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/3eddaf80-5bca-40bf-810e-7d1f0b070abe)






![finalprojectp2-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/7716a5ce-6080-4325-9696-00a68bc44dbd)




<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

### Challenges encountered while building the app:
- Handling the dynamic state of the app, especially when it comes to updating the UI based on whether a user is logged in or not.
- Integrating the external Anime API in a way that is performant and does not block the app’s main UI thread.
- Implementing pseudo-authentication and ensuring secure management of user data without the complexity of full authentication systems.

## License

    Copyright [2025] [Eli Antoine]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use
