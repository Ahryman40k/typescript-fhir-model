
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Dosage } from '../Resource/Dosage';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum MedicationStatementStatusKind {
                active,
completed,
enteredInError,
intended,
stopped,
onHold,
unknown,
notTaken
            }

        /**
         * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 
         */
        export class MedicationStatement  {

            constructor() {
                this.subject = new Reference();
            }

            
                /**
                 * This is a MedicationStatement resource
                 */
                resourceType: string = 'MedicationStatement;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
                 */
                identifier? : Identifier[];
                

                /**
                 * A plan, proposal or order that is fulfilled in whole or in part by this event.
                 */
                basedOn? : Reference[];
                

                /**
                 * A larger event of which this particular event is a component or step.
                 */
                partOf? : Reference[];
                

                /**
                 * A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
                 */
                status? : MedicationStatementStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Captures the reason for the current state of the MedicationStatement.
                 */
                statusReason? : CodeableConcept[];
                

                /**
                 * Indicates where the medication is expected to be consumed or administered.
                 */
                category? : CodeableConcept;
                

                /**
                 * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationCodeableConcept? : CodeableConcept;
                

                /**
                 * Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
                 */
                medicationReference? : Reference;
                

                /**
                 * The person, animal or group who is/was taking the medication.
                 */
                subject : Reference;
                

                /**
                 * The encounter or episode of care that establishes the context for this MedicationStatement.
                 */
                context? : Reference;
                

                /**
                 * The interval of time during which it is being asserted that the patient is/was/will be taking the medication ( or was not taking, when the MedicationStatement.taken element is No).
                 */
                effectiveDateTime? : string;
                

                /**
                 * Extensions for effectiveDateTime
                 */
                _effectiveDateTime? : Element;
                

                /**
                 * The interval of time during which it is being asserted that the patient is/was/will be taking the medication ( or was not taking, when the MedicationStatement.taken element is No).
                 */
                effectivePeriod? : Period;
                

                /**
                 * The date when the medication statement was asserted by the information source.
                 */
                dateAsserted? : DateTime;
                

                /**
                 * Extensions for dateAsserted
                 */
                _dateAsserted? : Element;
                

                /**
                 * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest.
                 */
                informationSource? : Reference;
                

                /**
                 * Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
                 */
                derivedFrom? : Reference[];
                

                /**
                 * A reason for why the medication is being/was taken.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Condition or observation that supports why the medication is being/was taken.
                 */
                reasonReference? : Reference[];
                

                /**
                 * Provides extra information about the medication statement that is not conveyed by the other attributes.
                 */
                note? : Annotation[];
                

                /**
                 * Indicates how the medication is/was or should be taken by the patient.
                 */
                dosage? : Dosage[];
                
        }
        