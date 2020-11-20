import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, Filesystem } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePhoto(): Promise<CameraPhoto> {
    return await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  public async photoToBlob(photo: CameraPhoto): Promise<Blob> {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    return blob
  }

}
