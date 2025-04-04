import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Camera, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import Toast from 'react-native-toast-message';
import { usePermissions as useMediaLibraryPermissions } from 'expo-media-library';

// Definisci l'enum per il flash (se vuoi mantenerlo)
enum FLASHMODE {
  off = 'off',
  on = 'on',
}

export default function App() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = useMediaLibraryPermissions();

  const [facing, setFacing] = useState<CameraType>('back');
  const [flashMode, setFlashMode] = useState<FLASHMODE>(FLASHMODE.off);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    Toast.show({
      type: 'info',
      text1: 'Benvenuto',
      text2: 'In questa sezione puoi scattare foto e salvarle in galleria',
    });
  }, []);

  if (!cameraPermission || !mediaPermission) {
    // I permessi sono in fase di caricamento
    return <View />;
  }

  if (!cameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          È necessario il permesso per utilizzare la fotocamera
        </Text>
        <Button onPress={requestCameraPermission} title="Concedi permesso" />
      </View>
    );
  }

  if (!mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          È necessario il permesso per salvare le foto in galleria
        </Text>
        <Button onPress={requestMediaPermission} title="Concedi permesso" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleFlash() {
    setFlashMode(current => {
      const newMode = current === FLASHMODE.off ? FLASHMODE.on : FLASHMODE.off;
      Toast.show({
        type: 'info',
        text1: 'Flash',
        text2: newMode === FLASHMODE.on ? 'Flash attivo' : 'Flash disattivo',
        position: 'bottom',
      });
      return newMode;
    });
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={facing}
        flashMode={flashMode === FLASHMODE.off ? FLASHMODE.off : FLASHMODE.on}
        ref={cameraRef}
      >
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.button} onPress={toggleFlash}>
            <Text style={styles.text}>Flash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shutterButton} onPress={takePicture}>
            <Text style={styles.text}>Scatta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonGrid: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    padding: 10,
  },
  shutterButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 20,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
