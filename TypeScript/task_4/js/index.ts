import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5,
};

const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log('Cpp:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log('\nJava:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log('\nReact:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
