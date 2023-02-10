import React from 'react'
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native'
import { formatearFecha } from '.'

const Paciente = ({ item, setModalVisible, pacienteEditar, eliminarPaciente, setModalPaciente, setPaciente }) => {
    const { paciente, fecha, id } = item
    

    return (
        <ScrollView>
            <Pressable onLongPress={() => 
                {
                    setModalPaciente(true)
                    setPaciente(item)
                }}>
                <View style={styles.contenedor}>
                    <Text style={styles.label}>Paciente:</Text>
                    <Text style={styles.texto}>{paciente}</Text>
                    <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

                    <View style={styles.contenedorBtn}>
                        <Pressable style={[styles.btn, styles.btnEditar]} onLongPress={() => {
                            setModalVisible(true)
                            pacienteEditar(id)
                        }}>
                            <Text style={styles.btnTexto}>Editar</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.btn, styles.btnEliminar]}
                            onLongPress={() => eliminarPaciente(id)}
                        >
                            <Text style={styles.btnTexto}>Eliminar</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create
    ({
        contenedor:
        {
            backgroundColor: '#FFF',
            padding: 20,
            borderBottomColor: '#94a3B8',
            borderBottomWidth: 1
        },
        label:
        {
            color: '#374151',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: 20
        },
        texto:
        {
            color: '#6D28D9',
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 10
        },
        fecha:
        {
            color: '#374151'
        },
        contenedorBtn:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },
        btn:
        {
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 5
        },
        btnEditar:
        {
            backgroundColor: '#F59E0B'
        },
        btnEliminar:
        {
            backgroundColor: '#EF4444'
        },
        btnTexto:
        {
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: 12,
            color: '#FFF'
        }
    });
export default Paciente