import { Injectable } from '@nestjs/common';
import { MinioClientService } from 'src/modules/minio-client/minio-client.service';
import { BufferedFile } from 'src/modules/minio-client/file.model';

@Injectable()
export class FileUploadService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadSingle(image: BufferedFile) {
    try {
      const uploaded_image = await this.minioClientService.upload(image);

      return {
        image_url: uploaded_image.url,
        message: 'Successfully uploaded to MinIO S3',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
