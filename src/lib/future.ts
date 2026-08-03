/**
 * Future-ready domain types — booking, scheduling, regions, pricing.
 * Intentionally not implemented; architecture prepared for later phases.
 */

export type ServiceRegionId =
  | 'leiderdorp'
  | 'leiden'
  | 'oegstgeest'
  | 'voorschoten'
  | 'zoeterwoude'
  | 'katwijk-aan-zee'

export type TransmissionType = 'manual' | 'automatic'

export type LessonPackageId = 'proefles' | 'ris-traject' | 'bijzonder'

export interface BookingDraft {
  regionId?: ServiceRegionId
  transmission?: TransmissionType
  packageId?: LessonPackageId
  preferredDate?: string
  preferredTimeSlot?: string
}

export interface PricingContext {
  regionId: ServiceRegionId
  transmission: TransmissionType
  packageId: LessonPackageId
}

export const FUTURE_BOOKING_ENDPOINT = '/api/booking' as const
export const FUTURE_SCHEDULING_ENDPOINT = '/api/scheduling' as const
export const FUTURE_PRICING_ENDPOINT = '/api/pricing' as const
