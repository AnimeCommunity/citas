import React, { Fragment, useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  FlatList,
  Alert
} from 'react-native';

import Formulario from './Components/Formulario';
import Paciente from './Components/Paciente';
import InformacionPacientes from './Components/InformacionPacientes';


function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)
  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  const eliminarPaciente = id => {
    Alert.alert('¿Deseas eliminar esta cita?', 'Una cita eliminada no se puede recuperar',
      [{ text: 'Cancelar' }, {
        text: 'Ok', onPress: () => {
          const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id)
          setPacientes(pacientesActualizados)
        }
      }])
  }

  const cerrarModal = () =>
  {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {''}
        <Text style={styles.tituloBold}>
          Veterinarias
        </Text>
      </Text>

      <Pressable style={styles.bntNuevaCita} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>
          Nueva Cita
        </Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No hay pacientes</Text> :
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (<Paciente item={item}
              setModalVisible={setModalVisible}
              pacienteEditar={pacienteEditar}
              eliminarPaciente={eliminarPaciente}
              setModalPaciente={setModalPaciente}
              setPaciente={setPaciente}

            />)
          }}
        />
      }

      {modalVisible &&
        (
          <Formulario
            cerrarModal={cerrarModal}
            modalVisible={modalVisible}
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente} />
        )}

      <Modal
        visible={modalPaciente} animationType='fade'>
        <InformacionPacientes paciente={paciente} setModalPaciente={setModalPaciente} setPaciente={setPaciente} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo:
  {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold:
  {
    fontWeight: '900',
    color: '#6D28D9'
  },
  bntNuevaCita:
  {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10

  },
  btnTextoNuevaCita:
  {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',

  },
  noPacientes:
  {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: '600'
  },
  listado:
  {
    marginTop: 50,
    marginHorizontal: 30,
  },

});

export default App;
