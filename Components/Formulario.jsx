import React, { useState, useEffect } from 'react'
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
  TextInput,
  Alert,

} from 'react-native';

import DatePicker from 'react-native-date-picker'

const Formulario = ({cerrarModal, modalVisible, pacientes, setPacientes,
  paciente: pacienteObj, setPaciente: setPacienteObj }) => {

  const [paciente, setPaciente] = useState('')
  const [id, setId] = useState('')
  const [cliente, setCliente] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')


  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0) {
      setId(pacienteObj.id)
      setPaciente(pacienteObj.paciente)
      setCliente(pacienteObj.cliente)
      setEmail(pacienteObj.email)
      setTelefono(pacienteObj.telefono)
      setSintomas(pacienteObj.sintomas)
      setFecha(pacienteObj.fecha)

    }
  }, [pacienteObj])

  const handleCita = () => {
    if ([paciente, cliente, email, telefono, fecha, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorio')
      return
    }

    const nuevoPaciente =
    {
      paciente,
      cliente,
      email,
      telefono,
      fecha,
      sintomas
    }
    if (id) {
      nuevoPaciente.id = id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ?
        nuevoPaciente : pacienteState)

      setPacientes(pacientesActualizados)

    } else {
      nuevoPaciente.id = Date.now()
      setPacientes([...pacientes, nuevoPaciente])
      setPacienteObj({})
    }


    cerrarModal()

    setId('')
    setPaciente('')
    setCliente('')
    setEmail('')
    setTelefono('')
    setSintomas('')
    setFecha(new Date())

  }





  return (

    <Modal animationType='slide' visible={modalVisible}>
      <ScrollView>
        <SafeAreaView style={styles.contenido}>
          <Text style={styles.titulo}>
            {pacienteObj.id ? 'Editar' :'Agregar'} {''}
            <Text style={styles.tituloBold}>
              Cita
            </Text>
          </Text>


          <Pressable style={styles.btnCancelar} onPress={() => {
            cerrarModal()
            setPacienteObj({})
            setPaciente('')
            setCliente('')
            setEmail('')
            setTelefono('')
            setSintomas('')
            setFecha(new Date())
            setId('')
          }}>
            <Text style={styles.btnTextoCancelar}>
              X Cancelar
            </Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre paciente
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre paciente'
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente} />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre cliente
            </Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre cliente'
              placeholderTextColor={'#666'}
              value={cliente}
              onChangeText={setCliente} />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              email cliente
            </Text>
            <TextInput
              style={styles.input}
              keyboardType='email-address'
              placeholder='email cliente'
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail} />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono cliente
            </Text>
            <TextInput
              style={styles.input}
              keyboardType='phone-pad'
              placeholder='email cliente'
              placeholderTextColor={'#666'}
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10} />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Fecha cita
            </Text>
            <View style={styles.fechas}>
              <DatePicker
                date={fecha}
                locale='es'
                onDateChange={(date) => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Sintomas
            </Text>
            <TextInput
              style={[styles.input, styles.sintomasI]}
              placeholder='sintomas'
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true} numberOfLines={4} />
          </View>


          <Pressable style={styles.btnAgregarCita} onPress={handleCita}>
            <Text style={styles.btnAgregarCitaTexto}>
              {pacienteObj.id ? 'Editar' : 'Agregar'} cita
            </Text>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </Modal>

  )
}

const styles = StyleSheet.create
  ({
    contenido:
    {
      backgroundColor: '#6D28D9',
      flex: 1
    },
    titulo:
    {
      fontSize: 30,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
      color: '#FFF'
    },
    tituloBold:
    {
      fontWeight: '900'
    },
    campo:
    {
      marginTop: 10,
      marginHorizontal: 30,

    },
    label:
    {
      color: "#FFF",
      marginBottom: 10,
      marginTop: 15,
      fontSize: 20,
      fontWeight: '600',

    },
    input:
    {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,

    },
    sintomasI:
    {
      height: 100
    },
    fechas:
    {
      backgroundColor: '#FFF',
      borderRadius: 10,

    },
    btnCancelar:
    {
      marginVertical: 30,
      backgroundColor: '#5827A3',
      marginHorizontal: 30,
      padding: 20,
      borderRadius: 10,

    },
    btnTextoCancelar:
    {
      color: "#FFF",
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: '900'
    },
    btnAgregarCita:
    {
      marginVertical: 50,
      backgroundColor: '#F59E0B',
      paddingVertical: 15,
      marginHorizontal: 30,
      borderRadius: 10
    },
    btnAgregarCitaTexto:
    {
      color: '#5827A4',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: '900'

    },
  });


export default Formulario