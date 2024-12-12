import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { Button, Card, IconButton } from "react-native-paper";

const TimetableApp = () => {
  const [timetable, setTimetable] = useState([
    { id: "1", time: "9:00 AM - 10:00 AM", course: "Math 101", instructor: "Dr. Smith", location: "Room A1" },
    { id: "2", time: "10:15 AM - 11:15 AM", course: "Physics 201", instructor: "Prof. Johnson", location: "Room B2" },
  ]);

  const [newClass, setNewClass] = useState({
    time: "",
    course: "",
    instructor: "",
    location: "",
  });

  const handleAddClass = () => {
    if (newClass.time && newClass.course && newClass.instructor && newClass.location) {
      setTimetable([
        ...timetable,
        { id: Date.now().toString(), ...newClass },
      ]);
      setNewClass({ time: "", course: "", instructor: "", location: "" });
    }
  };

  const handleDeleteClass = (id) => {
    setTimetable(timetable.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Timetable</Text>

      {/* Timetable List */}
      <FlatList
        data={timetable}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.details}>{item.course}</Text>
              <Text style={styles.details}>{item.instructor}</Text>
              <Text style={styles.details}>{item.location}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="delete"
                size={20}
                onPress={() => handleDeleteClass(item.id)}
              />
            </Card.Actions>
          </Card>
        )}
      />

      {/* Add New Class Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Time (e.g., 9:00 AM - 10:00 AM)"
          value={newClass.time}
          onChangeText={(text) => setNewClass({ ...newClass, time: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Course Name"
          value={newClass.course}
          onChangeText={(text) => setNewClass({ ...newClass, course: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Instructor Name"
          value={newClass.instructor}
          onChangeText={(text) => setNewClass({ ...newClass, instructor: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={newClass.location}
          onChangeText={(text) => setNewClass({ ...newClass, location: text })}
        />
        <Button
          mode="contained"
          onPress={handleAddClass}
          style={styles.addButton}
        >
          Add Class
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  form: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  addButton: {
    marginTop: 8,
  },
});

export default TimetableApp;
