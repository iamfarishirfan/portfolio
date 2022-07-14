type LoadedModel = import('three/examples/jsm/loaders/GLTFLoader').GLTF;
type ResourceType = 'texture' | 'cubeTexture' | 'gltfModel';
type LoadedCubeTexture = THREE.CubeTexture;
type LoadedTexture = THREE.Texture;
type LoadedAudio = AudioBuffer;

type LoadedResource =
    | LoadedCubeTexture
    | LoadedTexture
    | LoadedModel
    | LoadedAudio;

type Resource =
    | CubeTextureResource
    | TextureResource
    | ModelResource
    | AudioResource;

declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

interface TextureResource {
    type: 'texture';
    name: string;
    path: string;
}

interface CubeTextureResource {
    type: 'cubeTexture';
    name: string;
    path: string[];
}

interface ModelResource {
    type: 'gltfModel';
    name: string;
    path: string;
}

interface AudioResource {
    type: 'audio';
    name: string;
    path: string;
}

interface EnclosingPlane {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    size: THREE.Vector2;
}

interface CameraKeyframe {
    focalPoint: THREE.Vector3;
    position: THREE.Vector3;
}


