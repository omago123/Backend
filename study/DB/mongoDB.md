
<p align="center"><img src="https://user-images.githubusercontent.com/73014464/154253848-f5b8c85b-3234-408f-81b8-cbf9f7d9b532.png" width=600 height=150></p>

  Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape
of the documents within that collection.

![화면 캡처 2022-02-11 144121](https://user-images.githubusercontent.com/73014464/153542978-525d5008-6b87-4309-9b3e-eba5f025823e.png)

title is property and String is Schematype.

# What is a SchemaType?
You can think of a Mongoose schema as the configuration object for a Mongoose model. <br>
A SchemaType is then a configuration object for an individual property.A SchemaType says <br>
what type a given path should have, whether it has any getters/setters, and what values are valid for that path. <br>


![화면 캡처 2022-02-11 215902](https://user-images.githubusercontent.com/73014464/153595596-132a7d7c-6401-4987-9cad-3cd0e810250e.png)

A SchemaType is different from a type. In other words, ```mongoose.ObjectId !== mongoose.Types.ObjectId.``` A SchemaType is just a configuration object for Mongoose. An instance of the mongoose.ObjectId SchemaType doesn't actually create MongoDB ObjectIds, it is just a configuration for a path in a schema.

# mongoDB 데이터 모델링
https://meetup.toast.com/posts/276










Reference  
https://mongoosejs.com/docs/guide.html  
https://meetup.toast.com/posts/276
