notes = new Notes();
expect.isEqual("creates an empty array for notes", notes.list.length, 0);
expect.isEqual("testing that console log works", notes.test(), "hello");
