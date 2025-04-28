import { PartialType } from '@nestjs/mapped-types';
import { CreateMashineDto } from './create-mashine.dto';

export class UpdateMashineDto extends PartialType(CreateMashineDto) {}
