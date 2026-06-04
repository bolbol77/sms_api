import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator'

export class RegisterInputDTO {
  @ApiProperty({ type: String, required: true })
  name: string

  @ApiProperty({ type: String, required: true })
  email: string

  @ApiProperty({ type: String })
  phone?: string

  @ApiProperty({ type: String, required: true })
  password: string

  @ApiProperty({ type: String, required: true })
  turnstileToken: string
}


export class LoginOrRegisterWithPhoneInputDTO {
  @ApiProperty({ description: 'Mobile number with country code', example: '+201234567890' })
  @IsString()
  @IsNotEmpty()
  phone: string

  @ApiProperty({ description: 'Password', example: 'mySecurePassword123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(128)
  password: string

  @ApiProperty({ description: 'User name (required only for new registration)', example: 'Ahmed Hassan', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ required: false })
  @IsOptional()
  turnstileToken?: string
}

export class LoginInputDTO {
  @ApiProperty({ type: String, required: true })
  email: string

  @ApiProperty({ type: String, required: true })
  password: string

  @ApiProperty({ type: String, required: true })
  turnstileToken: string
}

export class RequestResetPasswordInputDTO {
  @ApiProperty({ type: String, required: true })
  email: string

  @ApiProperty({ type: String, required: true })
  turnstileToken: string
}

export class ResetPasswordInputDTO {
  @ApiProperty({ type: String, required: true })
  email: string

  @ApiProperty({ type: String, required: true })
  otp: string

  @ApiProperty({ type: String, required: true })
  newPassword: string
}

export class UpdateOnboardingDTO {
  @ApiProperty({ required: false })
  currentStepId?: string

  @ApiProperty({ required: false, description: 'Only allowed for optional steps' })
  skipStepId?: string

  @ApiProperty({ required: false, description: 'When true, sets onboarding.completedAt' })
  complete?: boolean
}

