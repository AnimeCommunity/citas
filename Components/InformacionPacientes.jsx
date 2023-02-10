import React from 'react'
import { Text, SafeAreaView, View, Pressable, StyleSheet } from 'react-native'
import { formatearFecha } from '.'

const InformacionPacientes = ({ paciente, setModalPaciente, setPaciente }) => {
    return (
        <SafeAreaView style={styles.contenedor}>

            <Text style={styles.titulo}>
                Información {''}
                <Text style={styles.tituloBold}>
                    del paciente
                </Text>
            </Text>

            <View>
                <Pressable onLongPress={() => { {
                    setModalPaciente(false)
                    setPaciente({})
                    
                } }} style={styles.btnCancelar}>
                    <Text style={styles.btnTextoCancelar}>Cerrar X</Text>
                </Pressable>
            </View>
            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Nombre:
                    </Text>
                <Text style={styles.valor}>
                    {paciente.paciente}
                </Text >
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Cliente:
                    </Text>
                <Text style={styles.valor}>
                    {paciente.cliente}
                </Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Email:
                    </Text>
                <Text style={styles.valor}>
                    {paciente.email}
                </Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Telefono:
                    </Text>
                <Text style={styles.valor}>
                    {paciente.telefono}
                </Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Fecha:
                    </Text>
                <Text style={styles.valor}>
                    {formatearFecha(paciente.fecha)}
                </Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Sintomas:
                    </Text>
                <Text style={styles.valor}>
                    {paciente.sintomas}
                </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create
    ({
        contenedor:
        {
            backgroundColor: '#F59E0B',
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
        btnCancelar:
        {
            marginVertical: 30,
            backgroundColor: '#E06900',
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
        contenido:
        {
            backgroundColor: '#FFF',
            marginHorizontal: 30,
            borderRadius: 10,
            padding: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

        }, 
        campo:
        {
            marginBottom:10
        },
        label:
        {
            textTransform: 'uppercase',
            color:'#374151',
            fontWeight:'600',
            fontSize:12
        },
        valor:
        {
            fontWeight:'700',
            fontSize: 20, 
            color:'#334155'
        },
    })
export default InformacionPacientes