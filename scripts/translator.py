from googletrans import Translator, constants

# Create an instance of the Translator
translator = Translator()

# Set the text to translate
def translate(text,target_language ):
    # Detect the source language automatically
    detected_language = translator.detect(text).lang
    #print(detected_language)

    # Set the target language
    

    # Perform the translation
    translation = translator.translate(text, src=detected_language, dest=target_language)

    # Get the translated text
    translated_text = translation.text
    return translated_text , detected_language
