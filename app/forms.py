from django import forms


class ContactForm(forms.Form):
    classVal = 'form-control'
    from_email = forms.EmailField(label='Email:', required=True,
                                  widget=forms.TextInput(attrs={'class': classVal, 'placeholder': 'Enter Your Email'}))
    subject = forms.CharField(required=True,
                              widget=forms.TextInput(attrs={'class': classVal, 'placeholder': 'Enter The Subject'}))
    message = forms.CharField(required=True,
                              widget=forms.Textarea(attrs={'class': classVal, 'placeholder': 'Write Your Question Here'}))
